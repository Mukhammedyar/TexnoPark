import Button from '@mui/material/Button'
import Input from '../../UI/Input/Input'


export default function Contact() {
  return (
    <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className='px-10 my-10 flex justify-center items-center min-h-[300px]'>
        <form action="" className='w-full min-h-[200px] flex p-5 flex-wrap gap-2 md:gap-4' textColor="white" indicatorColor="secondary">
              <Input 
                placeholder={"Name"} 
                type={"text"}
                className={"md:w-[48%] lg:w-[49%]"}
                />
              <Input 
                placeholder={"Surname"} 
                type={"text"}
                className={"md:w-[48%] lg:w-[49%]"}
                />
              <Input 
                placeholder={"Number"} 
                type={"number"}
                className={"md:w-[48%] lg:w-[49%]"}
                />
              <Button variant="contained" color="success" className=' w-full md:w-[200px] bg-white h-[60px]'>
                Send
              </Button>
        </form>
    </div>
  )
}
