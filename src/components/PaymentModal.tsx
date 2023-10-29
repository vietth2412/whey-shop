import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Steps,
  Avatar,
  Card,
  Spin,
  message,
} from "antd";
import { getCart, removeCart } from "../services/cart.service";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  ElementsConsumer,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { UserOutlined } from "@ant-design/icons";
// ------- firebase config
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { userInfo } from "os";
import { paymentApi } from "../API";
const firebaseConfig = {
  apiKey: "AIzaSyDCyjQIvb8t6-sQyoMdmIyDvP21FZQPW_k",
  authDomain: "whey-shop.firebaseapp.com",
  projectId: "whey-shop",
  storageBucket: "whey-shop.appspot.com",
  messagingSenderId: "493748256369",
  appId: "1:493748256369:web:0a269a6255af620dd865d0",
  measurementId: "G-HWJGF2KE8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const { Step } = Steps;
const { TextArea } = Input;
const PaymentModal = ({ open, onClose, totalAmount }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const show = () => {
    onClose();
    setCurrentStep(0);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    setLoading(false);
  }, [open]);
  const handleSubmit = async (e: any) => {
    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );
    const cart = getCart();
    setLoading(true);
    if (token) {
      try {
        const request = {
          userInfo,
          token: token.id,
          cart,
          totalAmount,
        };
        console.log(request);
        await paymentApi(request);
        message.success("Thanh toán thành công, vui lòng kiểm tra email");
        removeCart();
        onClose();
        setLoading(false);
      } catch (error) {
        message.error("Thanh toán không thành công!");
        setLoading(false);
      }
    } else {
      message.error("Thông tin thẻ sai");
    }
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUserInfo({
        photoURL: data.user.photoURL,
        displayName: data.user.displayName,
        email: data.user.email,
      });
    });
  };
  const submitStep2 = (values: any) => {
    setUserInfo({
      ...userInfo,
      ...values,
    });
    handleNext();
  };
  return (
    <Modal
      title={"Thanh toán: " + totalAmount.toLocaleString("de-DE") + "đ"}
      open={open}
      onCancel={handleCancel}
      footer={null}
      closable={false}
    >
      <Spin spinning={loading}>
        <Steps current={currentStep} style={{ marginBottom: 20 }}>
          <Step title="Đăng nhập" />
          <Step title="Địa chỉ" />
          <Step title="Thông tin thẻ" />
        </Steps>

        {currentStep === 0 && (
          // Step 1 content (e.g., login with Google or Facebook)
          <div>
            {!userInfo && (
              <Button onClick={googleLogin}>Đăng nhập với google</Button>
            )}
            {userInfo && (
              <Card title="User Info">
                <Avatar
                  size={64}
                  src={userInfo?.photoURL}
                  icon={<UserOutlined />}
                />
                <p>{userInfo?.displayName}</p>
                <p>{userInfo?.email}</p>
                <p onClick={googleLogin}>
                  <a>Đổi tài khoản</a>
                </p>
              </Card>
            )}

            <br />
            <Button
              style={{ marginTop: 40 }}
              type="primary"
              disabled={!userInfo}
              onClick={handleNext}
            >
              Tiếp Tục
            </Button>
          </div>
        )}

        {currentStep === 1 && (
          // Step 2 content (e.g., information form for delivery)
          <div>
            <Form
              layout="vertical"
              onFinish={submitStep2}
              initialValues={{
                address: userInfo?.address,
                phone: userInfo?.phone,
                note: userInfo?.note,
              }}
            >
              <Form.Item
                label="Địa chỉ"
                name="address"
                required
                rules={[
                  { required: true, message: "không được để trống địa chỉ" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone"
                required
                rules={[
                  {
                    required: true,
                    message: "không được để trống số điện thoại",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Ghi chú" name="note">
                <TextArea />
              </Form.Item>
              <Button
                style={{ marginTop: 40, marginRight: 20 }}
                type="primary"
                htmlType="submit"
              >
                Tiếp
              </Button>
              <Button onClick={handlePrev}>Quay lại</Button>
            </Form>
          </div>
        )}

        {currentStep === 2 && (
          // Step 3 content (e.g., payment information)
          <Form onFinish={handleSubmit}>
            <CardElement />
            <Button
              htmlType="submit"
              style={{ marginTop: 40, marginRight: 20 }}
              type="primary"
            >
              Thanh Toán
            </Button>
            <Button onClick={handlePrev} htmlType="button">
              Quay lại
            </Button>
          </Form>
        )}
      </Spin>
    </Modal>
  );
};

export default PaymentModal;
