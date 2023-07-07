import SignInButton from "../auth/SignInButton";

export default function NavBar() {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <SignInButton />
    </header>
  );
}
