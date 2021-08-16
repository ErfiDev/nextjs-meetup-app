import { SignIn } from "../../components/account";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";

const AccountPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    return () => {
      nProgress.done();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Account / sign in</title>
      </Head>
      <SignIn />
    </>
  );
};

export default AccountPage;
