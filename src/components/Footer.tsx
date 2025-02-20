import { Github, Twitter, MessageSquare, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
                alt="MineChain Logo" 
                className="w-8 h-8"
              />
              <h3 className="font-bold">MineChain</h3>
            </div>
            <p className="text-mine-silver text-sm">
              Empowering the future of decentralized computing with enterprise-grade infrastructure and AI-powered optimization.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="# MineChain Whitepaper  

## **1. Introduction & Vision**  
### **The Future of AI Compute & Blockchain Mining**  
MineChain is the world's first decentralized AI-driven **compute power and GPU mining ecosystem**, combining high-performance AI workloads with **blockchain technology**. Built with a **fleet of NVIDIA 5090s, 4090s, and H100s**, MineChain enables **decentralized AI compute power**, enterprise-grade security, and **NFT-backed mining rewards**..."
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2"
                >
                  Documentation <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="# MineChain Whitepaper  

## **1. Introduction & Vision**  
### **The Future of AI Compute & Blockchain Mining**  
MineChain is the world's first decentralized AI-driven **compute power and GPU mining ecosystem**, combining high-performance AI workloads with **blockchain technology**. Built with a **fleet of NVIDIA 5090s, 4090s, and H100s**, MineChain enables **decentralized AI compute power**, enterprise-grade security, and **NFT-backed mining rewards**..." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2"
                >
                  Whitepaper <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
                  API Reference <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/caballerzdev" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/MineChainAi" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="**MineChain Privacy Policy**

**Effective Date:** [Insert Date]

## **1. Introduction**
Welcome to MineChain. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you access our website, services, and platform.

## **2. Information We Collect**
We collect the following types of information:
- **Personal Information**: Name, email address, contact details, and account information when you register or interact with our services.
- **Technical Data**: IP addresses, device information, browser type, and operating system for security and analytics.
- **Transaction Data**: Details of cryptocurrency transactions, wallet addresses, and blockchain interactions.
- **Cookies & Tracking Technologies**: We use cookies and similar tracking technologies to enhance user experience and monitor website activity.

## **3. How We Use Your Information**
We use your information for the following purposes:
- To provide and maintain our services.
- To process transactions and enable blockchain interactions.
- To improve security, detect fraud, and prevent malicious activity.
- To comply with legal obligations and regulatory requirements.
- To communicate updates, marketing materials, and service-related notifications (with opt-out options).

## **4. How We Share Your Information**
We do not sell or rent your personal information. However, we may share information with:
- **Service Providers**: Third-party vendors who assist in analytics, security, and platform functionality.
- **Legal & Compliance**: Authorities, regulators, or law enforcement when required by law.
- **Blockchain Networks**: Certain data (such as wallet addresses) may be stored publicly on the XRP Ledger and MineChain's blockchain infrastructure.

## **5. Data Security**
We implement advanced security measures, including encryption, firewalls, and AI-powered threat detection, to protect your data. However, no method of data transmission is completely secure, and we cannot guarantee absolute protection.

## **6. Data Retention**
We retain personal data only as long as necessary for operational and legal purposes. Users can request data deletion by contacting our support team.

## **7. Your Rights & Choices**
Depending on your jurisdiction, you have rights to:
- Access, update, or delete your personal data.
- Opt-out of marketing communications.
- Request limitations on certain data processing activities.
- Withdraw consent for data collection (where applicable).

## **8. Third-Party Links & Services**
MineChain may contain links to third-party websites or services. We are not responsible for their privacy policies or practices. Please review their policies before sharing personal information.

## **9. Updates to This Privacy Policy**
We may update this policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the revised policy.

## **10. Contact Us**
For questions or concerns about this Privacy Policy, please contact us:
- **Email:** privacy@minechain.ai
- **Website:** [www.minechain.ai](https://www.minechain.ai)

By using MineChain, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described herein."
                  className="text-mine-silver hover:text-white text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="**MineChain Terms of Service**

**Effective Date:** [Insert Date]

## **1. Introduction**
Welcome to MineChain. These Terms of Service ("Terms") govern your access to and use of our website, services, AI compute platform, blockchain integrations, and related offerings. By accessing or using MineChain, you agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.

## **2. Eligibility**
You must be at least 18 years old and legally capable of entering into a binding agreement to use our services. By using MineChain, you represent and warrant that you meet these requirements.

## **3. Services Provided**
MineChain provides AI-powered compute services, GPU mining, blockchain integrations, NFT-backed mining rewards, and enterprise AI solutions. We reserve the right to modify, update, or discontinue any part of our services at any time.

## **4. User Accounts & Security**
- You may be required to create an account to access certain services.
- You are responsible for safeguarding your account credentials and ensuring their confidentiality.
- MineChain is not liable for unauthorized account access or misuse of your credentials.

## **5. Acceptable Use**
By using MineChain, you agree not to:
- Engage in illegal, fraudulent, or deceptive activities.
- Violate intellectual property rights or distribute malicious software.
- Exploit vulnerabilities or attempt unauthorized access to systems.
- Misuse AI compute resources in violation of ethical AI guidelines.

## **6. Payments & Transactions**
- All payments made for services, AI compute power, and blockchain transactions are final and non-refundable unless explicitly stated otherwise.
- MineChain is not responsible for losses due to user error, unauthorized access, or system downtimes.
- Transactions involving cryptocurrency or NFTs are subject to blockchain network fees and risks associated with digital asset volatility.

## **7. Data & Privacy**
- MineChain collects and processes data in accordance with our **Privacy Policy**.
- Certain blockchain-related data (such as wallet addresses and transaction history) may be publicly visible and immutable.
- Users are responsible for securing their own private keys and sensitive blockchain information.

## **8. Intellectual Property**
- All content, trademarks, logos, and technology provided by MineChain are the exclusive property of MineChain or its licensors.
- You may not reproduce, modify, or distribute any part of our services without prior written consent.

## **9. Limitation of Liability**
- MineChain provides its services "as-is" and makes no warranties regarding availability, performance, or accuracy.
- We are not responsible for losses incurred due to service interruptions, blockchain network failures, or external hacking incidents.
- Our liability is limited to the maximum extent permitted by applicable law.

## **10. Termination & Suspension**
We reserve the right to terminate or suspend access to MineChain at our discretion, including but not limited to violations of these Terms, suspected fraudulent activity, or security threats.

## **11. Governing Law & Dispute Resolution**
These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes shall be resolved through binding arbitration or litigation in the appropriate courts of jurisdiction.

## **12. Changes to These Terms**
MineChain reserves the right to update or modify these Terms at any time. Changes will be posted on our website with an updated effective date. Continued use of MineChain constitutes acceptance of the revised Terms.

## **13. Contact Information**
For questions or concerns regarding these Terms, please contact us:
- **Email:** legal@minechain.ai
- **Website:** [www.minechain.ai](https://www.minechain.ai)

By using MineChain, you acknowledge that you have read, understood, and agree to these Terms of Service."
                  className="text-mine-silver hover:text-white text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-mine-silver text-sm">
          © {new Date().getFullYear()} MineChain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
