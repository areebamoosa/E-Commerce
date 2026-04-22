import SignUpForm from "@/components/auth/SignupForm";
import AccountNav from "@/components/layout/Navbar/AccountsNav";

export default function SignUp() {
  return (
    <div>
      <AccountNav/>
      <SignUpForm />
    </div>
  );
}
