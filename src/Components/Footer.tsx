import { Info } from "../Users";

const Footer=()=>{
  return <div className="mx-36  mt-20 mb-10 font-mono  flex justify-center flex-col gap-2 items-center">
  <div className="text-3xl text-primaryColor font-semibold"> Avantika Deshmukh </div>
  <div className="text-textColor text-xl">Copyright &copy; {new Date().getFullYear()} Avantika Deshmukh | All Rights Reserved</div>
  


  </div>
}
export default Footer;