import { SignIn } from "@clerk/nextjs";
import { Transition } from "@headlessui/react";

const SignInBox = ({ signIn }: { signIn: boolean }) => {
  return (
    <Transition
      as="div"
      show={signIn}
      enter="ease-out duration-300"
      enterFrom="-translate-y-full opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="ease-in duration-300"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="-translate-y-full opacity-0"
      className="absolute right-20 mt-12"
    >
      <SignIn />
    </Transition>
  );
};

export default SignInBox;
