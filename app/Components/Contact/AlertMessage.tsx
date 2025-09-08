import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertMessage = () => {
  return (
    <>
      <Alert variant="default">
        <AlertTitle>Contact Form Submitted!</AlertTitle>
        <AlertDescription>
          Your contact form has been submitted, you should recieve a response in
          the next coming days
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AlertMessage;
