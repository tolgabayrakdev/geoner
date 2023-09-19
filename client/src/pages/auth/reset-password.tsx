import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <Card variant="outline" border="" align="center">
          {loading ? (
            <section>
              <CardHeader>
                <Heading size="md" className="text-center">
                  {' '}
                  Reset your password
                </Heading>
              </CardHeader>
              <CardBody>
                <form>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3"
                    placeholder="Enter email"
                  />

                  <Button
                    type="submit"
                    className="mt-3 w-full"
                    colorScheme="blue"
                  >
                    Submit
                  </Button>
                </form>
              </CardBody>
              <CardFooter>
                <div className="">
                  <Link
                    className="hover:underline text-blue-600 hover:text-blue-500 duration-300"
                    to="/auth/login"
                  >
                    Back to login page
                  </Link>
                </div>
              </CardFooter>
            </section>
          ) : (
            <p className="text-xl m-4">Loading...</p>
          )}
        </Card>
      </div>
    </div>
  );
}
