export const AuthTagLinesConfig = {
  title: "Streamline Your Health Insurance with AI",
  taglines: [
    "✔️Get Instant answers about your health plan",
    "✔️Easily manage your claims",
    "✔️Find in-network or out-network doctors quickly",
  ],
};

export const ToggleLoginSignUpConfig = [
  {
    mode: "Login",
    label: "Login",
  },
  {
    mode: "SignUp",
    label: "SignUp",
  },
];

export const FormConfig = [
  {
    flag: "SignUp",
    id: "fname",
    name: "fname",
    placeholder: "🔤Enter Your Full Name",
    label: "Full Name",
    type: "text",
  },
  {
    flag: "SignUp",
    id: "crn",
    name: "crn",
    placeholder: "🔢Enter Your CRN",
    label: "CRN",
    type: "number",
  },
  {
    flag: "Login-SignUp",
    id: "email",
    name: "email",
    placeholder: "✉️Enter Your email",
    label: "Email",
    type: "text",
  },
  {
    flag: "Login-SignUp",
    id: "pwd",
    name: "pwd",
    placeholder: "🔒********",
    label: "Password",
    type: "password",
  },
];

export const SidebarConfig = [
  {
    name: "Claims",
    link: "/claims",
  },
  {
    name: "Provider",
    link: "/provider",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

export const MobileNavConfig = [
  {
    iconName: "dashboard",
    label: "Dashboard",
    link: "/",
  },
  {
    iconName: "claims",
    label: "Claims",
    link: "/claims",
  },
  {
    iconName: "provider",
    label: "Provider",
    link: "/provider",
  },
  {
    iconName: "profile",
    label: "Profile",
    link: "/profile",
  },
];
