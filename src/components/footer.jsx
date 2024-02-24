import React from 'react'

// import { Footer } from 'flowbite-react';
// export const Footer = () => {
//   return (
//     <div className='text-center mt-10'>
//         <p>Book Harbour</p>
//         <p>Sai Nagar,Amravati,Maharastra 444607</p>
//         <p>
//             <a href="">About us</a>
//             <a href="">Contact</a>
//             <a href="">Term of service</a>
//             <a href="">Privacy Policy</a>
//         </p>

//     </div>
//   )
// }

// export const Foooter = () =>{
//     return (
//       <Footer container className='text-center'>
//         <Footer.Copyright href="#" by="Book Harbour" year={2024} />
//         <Footer.LinkGroup className='text center'>
//           <Footer.Link href="#">About</Footer.Link>
//           <Footer.Link href="#">Privacy Policy</Footer.Link>
//           <Footer.Link href="#">Licensing</Footer.Link>
//           <Footer.Link href="#">Contact</Footer.Link>
//         </Footer.LinkGroup>
//       </Footer>
//     );
//   }



import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export const Foooter = () =>  {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
