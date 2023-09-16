import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"


type Props = {}

export default function Login({ }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <Card variant="outline" border="" align='center'>
          <CardHeader>
            <Heading size='md'> Login here</Heading>
          </CardHeader>
          <CardBody>
            <form className="">
            <Input onChange={(e)=> setEmail(e.target.value)} className="mb-3" placeholder='Basic usage'/>
              <InputGroup size='md'>
                <Input
                onChange={(e)=> setPassword(e.target.value)}
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
              <Button className="mt-4" colorScheme='blue'>Log In</Button>

            </form>
          </CardBody>
          <CardFooter>
            Forget password ?
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}