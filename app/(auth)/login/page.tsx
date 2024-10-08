"use client";

import Image from "next/image";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import loginBanner from "../../../assets/images/login-banner.svg";
import { Button, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import lockIcon from "../../../assets/images/lock-icon.svg";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        message.error(result.error);
      } else {
        message.success("Login successful");
        router.push("/dashboard"); // Redirect to dashboard or home page
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen p-[34px]">
      <div className="w-full h-full rounded-3xl flex justify-between ">
        <div className="flex items-center justify-center flex-1">
          <form
            onSubmit={handleSubmit}
            className="w-[683px] h-[600px] flex flex-col items-center justify-center gap-y-4"
          >
            <div>
              <h1 className="text-[80px] text-[#0b7cf8] font-[700] font-sans">
                Welcome
              </h1>
              <p className="text-center text-gray-600">
                We are glad to see you back with us
              </p>
            </div>
            <Input
              className="max-w-[364px]"
              size="large"
              placeholder="Email"
              prefix={<UserOutlined />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              size="large"
              className="max-w-[364px]"
              placeholder="Password"
              prefix={
                <Image src={lockIcon} alt="lock-icon" width={14} height={14} />
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="primary"
              size="large"
              className="w-[364px]"
              htmlType="submit"
              loading={loading}
            >
              Login
            </Button>
            <Link
              href={"/register"}
              className="text-blue-400 hover:cursor-pointer hover:text-blue-600 underline"
            >
              create a new account?
            </Link>
          </form>
        </div>
        <div className="lg:flex items-center hidden">
          <Image
            src={loginBanner}
            width={683}
            height={700}
            alt="banner image"
            style={{
              width: "683px",
              height: "600px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
