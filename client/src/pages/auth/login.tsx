import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"


type Props = {}

export default function Login({ }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


  const loginSubmitHandle = async (e: any) => {
    setLoading(false);
    e.preventDefault()
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ "email": email, "password": password })
      })
      if (res.status === 200) {
        console.log("GİRİŞ BAŞARILI");
      } else {
        setTimeout(() => {
          setLoading(true)
        }, 1500)
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }

  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <Card variant="outline" border="" align='center'>
          {
            loading ? <section>
              <CardHeader>
                <Heading size='md'> Login here</Heading>
              </CardHeader>
              <CardBody>
                <form onSubmit={loginSubmitHandle} className="">
                  <Input onChange={(e) => setEmail(e.target.value)} className="mb-3" placeholder='Basic usage' />
                  <InputGroup size='md'>
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button type="submit" className="mt-4" colorScheme='blue'>Log In</Button>

                </form>
              </CardBody>
              <CardFooter>
                Forget password ?
              </CardFooter>
            </section> : <p className="text-xl m-3">Loading...</p>

          }

        </Card>
      </div>
    </div>
  )
}