import React from "react";
import { Row, Col, Typography, Button, Card } from "antd";
import "../LandingPage/LandingPage.css";
import { Link } from "react-router-dom";
import landingpageIT from "../../assets/landingpageIT.png";

import logo from "../../assets/logo.png";
import mangeditservices from "../../assets/mangeditservices.jpg";
import landingpageIT3 from "../../assets/landingpageIT3.png";
import landingpagemangedservice from "../../assets/landingpagemangedservice.jpg";
import cybersecurity from "../../assets/cybersecurity.jpg";
import aboutusq from "../../assets/aboutusq.png";
import mangeditserviceaus from "../../assets/mangeditserviceaus.jpg";
import microsoft from "../../assets/microsoft.jpg";
import {
  DesktopOutlined,
  AppstoreOutlined,
  CloudOutlined,
  SafetyOutlined,
  UsergroupAddOutlined,
  RocketOutlined,
  LockOutlined,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const services = [
  {
    title: "Managed IT Services",
    description:
      "At Vasilissa Technologies, we provide comprehensive Managed IT Services designed to optimize your business operations while minimizing downtime and costs. Our proactive approach ensures your IT infrastructure remains secure, efficient, and scalable, allowing you to focus on achieving your business goals.",
    icon: <DesktopOutlined style={{ fontSize: "48px", color: "#d50032" }} />,
  },
  {
    title: "Microsoft 365",
    description:
      "Unlock the full potential of Microsoft 365 with Vasilissa Technologies. We offer comprehensive solutions to integrate, manage, and optimize Microsoft 365 tools for your business. Whether you're looking to enhance collaboration, streamline workflows, or improve productivity, we provide seamless support and management to ensure you get the most from your Microsoft 365 investment.",

    icon: <AppstoreOutlined style={{ fontSize: "48px", color: "#d50032" }} />,
  },
  {
    title: "Cloud Services",
    description:
      "Unlock the power of the cloud with Vasilissa Technologies. Our Cloud Services are designed to streamline your operations, enhance collaboration, and scale your business with ease. Whether you're looking to migrate to the cloud, optimize existing cloud infrastructure, or ensure your cloud-based systems are secure and reliable, we provide tailored solutions to meet your unique needs.",
    icon: <CloudOutlined style={{ fontSize: "48px", color: "#d50032" }} />,
  },
  {
    title: "Cyber Security",
    description:
      "In today’s digital landscape, securing your business from cyber threats is more critical than ever. Vasilissa Technologies provides comprehensive Cybersecurity Services designed to protect your data, systems, and network from evolving threats. Our proactive, multi-layered approach ensures your business stays secure while maintaining compliance with industry standards.",
    icon: <SafetyOutlined style={{ fontSize: "48px", color: "#d50032" }} />,
  },
];
const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Austin Technology Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="menu">
            <Link to="/services">Services</Link>

            <Link to="/about">About</Link>

            <Link href="/contact">Contact Us</Link>
          </nav>

          {/* Instant Quote Button */}
        </div>
      </header>

      {/* Banner */}
      <div className="banner">
        <div className="banner-content">
          <Title className="banner-title">
            Innovative Solutions. Trusted Excellence.
          </Title>
          <Paragraph className="banner-description">
            Welcome to Vasilissa Technologies, where innovation meets
            reliability. We provide cutting-edge IT solutions, application
            development, and managed services tailored to your business needs.
            Empowering growth, ensuring compliance, and delivering
            excellence—every step of the way.{" "}
          </Paragraph>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <Row gutter={[16, 16]} align="middle">
          {/* Image Column */}
          <Col xs={24} md={12}>
            <div className="about-image">
              <img src={landingpageIT} alt="Unified Communications" />
            </div>
          </Col>
          {/* Content Column */}
          <Col xs={24} md={12}>
            <div className="about-content">
              <Title level={2}>
                Unified Communications at Vasilissa Technologies
              </Title>
              <Paragraph>
                At Vasilissa Technologies, we understand the importance of
                seamless communication in today’s fast-paced business
                environment. Our Unified Communications (UC) solutions integrate
                voice, video, messaging, and collaboration tools into one
                cohesive platform, enabling your team to communicate and
                collaborate effortlessly, no matter where they are.
              </Paragraph>
              <Paragraph>
                At Vasilissa Technologies, we simplify innovation and make it
                impactful. Our expert team removes the complexity of advanced
                technology, providing solutions that are both accessible and
                perfectly aligned with your business goals. With our support,
                you'll achieve operational efficiencies that grow with your
                business, giving you a competitive edge and maximizing the value
                of your technology investments.
              </Paragraph>
              <Paragraph>
                Trust Vasilissa Technologies to keep your business ahead of the
                curve with solutions designed to fuel growth, resilience, and
                long-term success.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>

      {/* Services Section */}
      <div id="services" className="services-section">
        <Title className="section-title">Our IT Services at a Glance</Title>
        <Row gutter={[16, 16]} justify="center">
          {services.map((service, index) => (
            <Col span={6} key={index}>
              <div className="service-card">
                {service.icon}
                <Title level={4}>{service.title}</Title>
                <Paragraph>{service.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Difference Section */}
      <div id="difference" className="difference-section">
        <Title>
          <span style={{ color: "white" }}>The</span>{" "}
          <span className="highlight">Vasilissa Technologies</span>{" "}
          <span style={{ color: "white" }}>difference</span>
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="difference-card">
              <UsergroupAddOutlined
                style={{ fontSize: "48px", color: "#d50032" }}
              />

              <Title level={4}>Local IT Team</Title>
              <Paragraph
                style={{
                  fontWeight: 500,
                  color: "#cecece",
                  fontSize: "medium",
                }}
              >
                With a team based right here in United States, we understand our
                business landscape, and we’re deeply embedded into the local
                community. Our hands-on approach ensures personalized service
                and quick responses tailored to your needs.
              </Paragraph>
            </div>
          </Col>
          <Col span={8}>
            <div className="difference-card">
              <RocketOutlined style={{ fontSize: "48px", color: "#d50032" }} />

              <Title level={4}>Rapid Response Times</Title>
              <Paragraph
                style={{
                  fontWeight: 500,
                  color: "#cecece",
                  fontSize: "medium",
                }}
              >
                Our service desk is renowned for its speed—tickets are triaged
                and addressed within 15 minutes. This means minimal downtime for
                your business, fast solutions to IT issues, and speedy
                assistance for your employees.
              </Paragraph>
            </div>
          </Col>
          <Col span={8}>
            <div className="difference-card">
              <LockOutlined style={{ fontSize: "48px", color: "#d50032" }} />
              <Title level={4}>ACSC Essential 8 Expertise</Title>
              <Paragraph
                style={{
                  fontWeight: 500,
                  color: "#cecece",
                  fontSize: "medium",
                }}
              >
                We prioritize protecting your business from cyber threats. Our
                wide range of cybersecurity services are aligned with the
                Australian Cyber Security Centre (ACSC) Essential 8 risk
                mitigation controls to protect your data and IT infrastructure.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>

      {/* Benefits Section */}
      {/* Benefits Section */}
      <div className="benefits-section">
        <Row gutter={[16, 16]} align="middle">
          <Col span={12}>
            <div className="benefits-text">
              <Title>Benefits To Your Business</Title>
              <div className="benefit-item">
                <Title
                  level={4}
                  className="benefit-title"
                  style={{ color: "#cb1d24" }}
                >
                  Control Costs
                </Title>
                <Paragraph
                  style={{
                    fontSize: 16,
                    color: "#1F1F1F",
                    fontWeight: 600,
                    fontFamily: "sans - serif",
                  }}
                >
                  With Vasilissa Technologies as your Managed Services Provider,
                  we help transform your IT expenses from fixed overheads into
                  flexible costs, ensuring you only pay for what you truly need.
                  Our focus is on optimizing your budget while maintaining the
                  highest standards of IT excellence.
                </Paragraph>
              </div>
              <div className="benefit-item">
                <Title
                  level={4}
                  className="benefit-title"
                  style={{ color: "#cb1d24" }}
                >
                  Boost Productivity
                </Title>
                <Paragraph
                  style={{
                    fontSize: 16,
                    color: "#1F1F1F",
                    fontWeight: 600,
                    fontFamily: "sans - serif",
                  }}
                >
                  Our expert team works tirelessly to minimize downtime,
                  ensuring your IT infrastructure remains robust and supports
                  maximum productivity across your workforce.
                </Paragraph>
              </div>
              <div className="benefit-item">
                <Title
                  level={4}
                  className="benefit-title"
                  style={{ color: "#cb1d24" }}
                >
                  Enhance Security
                </Title>
                <Paragraph
                  style={{
                    fontSize: 16,
                    color: "#1F1F1F",
                    fontWeight: 600,
                    fontFamily: "sans - serif",
                  }}
                >
                  Vasilissa Technologies stays ahead of emerging security
                  threats, applying our industry expertise to safeguard your
                  business, protect critical data, and keep you competitive in a
                  constantly evolving digital landscape.
                </Paragraph>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="benefits-image">
              <img src={aboutusq} alt="Austin Technology Team" />
            </div>
          </Col>
        </Row>
      </div>

      {/* Insights Section */}
      {/* Insights Section */}
      <div className="insights-section">
        <Title className="section-title">Latest Insights</Title>
        <Paragraph className="section-subtitle">
          Keep up with the latest trends and news
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {[
            {
              title: "Is Managed IT Worth It? A Cost-Benefit Analysis",
              category: "Managed IT Services",
              image: landingpagemangedservice,
            },
            {
              title:
                "The Ultimate Cyber Security Guide for Australian Businesses",
              category: "Cybersecurity",
              image: cybersecurity,
            },
            {
              title:
                "Vasilissa Technologies Achieves WatchGuard Gold Partner Certification!",
              category: "Business",
              image: mangeditserviceaus,
            },
            {
              title: "What is Microsoft 365? Guide for Businesses",
              category: "Microsoft",
              image: microsoft,
            },
          ].map((insight, index) => (
            <Col span={6} key={index}>
              <div className="insight-card">
                <div className="insight-image">
                  <img src={insight.image} alt={insight.title} />
                  <div className="category-badge">{insight.category}</div>
                </div>
                <div className="insight-content">
                  <Title level={5}>{insight.title}</Title>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src={logo}
                style={{ width: 78 }}
                alt="Austin Technology Logo"
              />
            </div>
            <Paragraph
              style={{ color: "white", fontSize: 18, fontWeight: 500 }}
            >
              We’re more than just an IT company and technology provider – we’re
              a partner that has your best interest as our number one focus.
            </Paragraph>
            <Paragraph
              style={{ color: "white", fontSize: 18, fontWeight: 500 }}
            >
              © 2024 All rights reserved
            </Paragraph>
            <div className="footer-social">
              <a href="#facebook">
                <FacebookFilled
                  style={{ fontSize: "28px", color: "#CB1D24" }}
                />
              </a>
              <a href="#linkedin">
                <LinkedinFilled
                  style={{ fontSize: "28px", color: "#CB1D24" }}
                />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <Title level={4}>Your Success is Our Top Priority.</Title>
            <Paragraph
              style={{ color: "white", fontSize: 18, fontWeight: 500 }}
            >
              From start-ups of 5 employees, to established companies with over
              300 staff, our flexible service packages scale with your needs,
              promote smooth operations, and enable your internal IT team to
              focus on strategic goals.
            </Paragraph>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
