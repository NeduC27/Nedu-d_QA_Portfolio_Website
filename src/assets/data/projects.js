import Ecommerce from '../Images/Ecommerce.jpg'
import ChatApp from '../Images/ChatApp.jpg'
import Deexoption from '../Images/Deexoption.jpg'
import Ajohybrid from '../Images/Ajohybrid.jpg'
import AjohybridCoop from '../Images/AjohybridCoop.jpg'
import foodInventory from '../Images/foodInventory.jpg'

export const projects = [
  {
    id: 1,
    title: "DeexOptions | AI-Powered Trading Platform",
    category: "Fintech QA",
    description: "Tested a high-performance trading dashboard end-to-end — verifying real-time price feed accuracy, trade execution flows, and risk-management tool behavior under live data conditions. Performed functional and UI testing on the dark-mode interface across devices, then tracked defects through resolution with the dev team.",
    tech: ["Functional Testing", "Real-Time Data QA", "Cross-Device Testing", "Defect Tracking"],
    link: "https://www.deexoptions.com",
    image: Deexoption,
  },
  {
    id: 2,
    title: "AjoHybrid | Cooperative Platform",
    category: "QA & Technical PM",
    description: "Coordinated with designers and engineers to validate features against requirements before release, catching gaps early. Reviewed technical decisions for scalability and maintainability risk, and led client-facing UAT sessions — translating stakeholder feedback into clear, actionable test cases.",
    tech: ["UAT Coordination", "Requirements Analysis", "Test Case Design", "Agile/Scrum"],
    link: "https://coop.ajohybrid.com",
    image: AjohybridCoop,
  },
  {
    id: 3,
    title: "WashTrack | Laundry Management App",
    category: "Cross-Platform QA",
    description: "Tested end-to-end order lifecycle tracking (drop-off → wash → iron → delivery) across web and mobile, verifying status updates stayed consistent at every stage. Validated automated revenue reporting against manual records and confirmed subscription-tier logic — free trial through 1000+ order plans — enforced correctly.",
    tech: ["Functional Testing", "Regression Testing", "Subscription Logic QA", "Cross-Platform Testing"],
    link: "https://washtrack.ng/",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "EazyMed | Healthcare Platform",
    category: "Healthcare QA",
    description: "Tested authentication and onboarding flows, specialist search and appointment booking, and in-app wallet/payment systems for treatment funding. Verified the medication ordering and delivery pipeline end-to-end, including third-party dispatch handoffs, and confirmed data consistency across integrated hospital and pharmacy systems.",
    tech: ["Payment Testing", "Third-Party Integration QA", "Cross-Platform Testing", "Functional Testing"],
    link: "https://eazymed.net/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cafeteria Food Inventory System",
    category: "Fullstack QA",
    description: "Tested a dual-role (Admin/Buyer) inventory platform — covering CRUD operations, stock replenishment, and audit-log timestamp accuracy. Validated the buyer shopping flow across screen sizes and verified Nigerian Naira pricing logic and role-based access control between account types.",
    tech: ["CRUD Testing", "Role-Based Access Testing", "Regression Testing", "Responsive QA"],
    link: "https://fullstack-frontend-food-i-nventory.vercel.app/",
    image: foodInventory,
  },
  {
    id: 6,
    title: "Swift Wear E-Commerce",
    category: "E-Commerce QA",
    description: "Verified Stripe checkout integration end-to-end on a React + Redux platform, testing cart persistence, state management edge cases, and responsive layouts across device sizes.",
    tech: ["Payment Gateway Testing", "State Management QA", "Responsive Testing"],
    link: "https://swift-wear-e-commerce-site.vercel.app/",
    image: Ecommerce,
  },
  {
    id: 7,
    title: "Real-Time Chat Engine",
    category: "Fullstack QA",
    description: "Tested Firebase real-time data synchronization for message delivery consistency, verifying UI responsiveness and reliable message ordering under live conditions.",
    tech: ["Real-Time Data Testing", "UI Responsiveness QA", "Functional Testing"],
    link: "https://nedu-chat-app.vercel.app/",
    image: ChatApp,
  },
  {
    id: 8,
    title: "Cooperative Member & Admin Apps",
    category: "Web Application QA",
    description: "Tested member dashboards, transaction records, and loan approval workflows on the member-facing app, and validated admin reporting accuracy and role-based access control on the admin console.",
    tech: ["Dashboard Testing", "Transaction QA", "RBAC Testing"],
    link: "https://app.ajohybrid.com",
    image: Ajohybrid,
  },
];