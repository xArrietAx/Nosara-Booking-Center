import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const AnotherService = () => {

    const data = [
        {
            title:"Shopping",
            paragraph:"Enjoy hassle-free shopping with our personalized shopping services! Let us handle your errands and deliver your purchases straight to your door, saving you time and effort.",
            href:"/Shopping_service",
            img:{
                src:"/Shopping.jpg",
                alt:"Shopping",
                width:"1920",
                height:"1280"
            }
        },
        {
            title:"Nanny",
            paragraph:"Discover peace of mind with our professional nanny services! Our experienced team provides reliable and caring support, ensuring your little ones are in safe hands while you're away.",
            href:"/ContactUs",
            img:{
                src:"/Nanny.jpg",
                alt:"Nanny",
                width:"1920",
                height:"1280"
            }
        },
        {
            title:"Cleaning",
            paragraph:"Experience the difference with our professional cleaning services! Let our expert team tackle the dirt and grime, leaving your space sparkling clean.",
            href:"/ContactUs",
            img:{
                src:"/Cleaning.jpg",
                alt:"Cleaning",
                width:"1920",
                height:"1280"
            }
            
        },
        {
            title:"Canopy tour",
            paragraph:"Enjoy the exhilarating canopy tour, gliding through the treetops in Nosara. Immerse yourself in nature as you traverse suspended cables between forest platforms.",
            href:"/Canopy_tour",
            img:{
                src:"/ZipLine.jpg",
                alt:"ZipLine",
                width:"1920",
                height:"1280"
            }
        }
    ]

  return (
    <section className="container">
        <div className="space-y-16 my-44">

        <h2 className='font-[600] text-center text-[2.5em] sm:text-2xl'>
        We can help you with <br /> these service too
        </h2>

       <div className="grid grid-cols-4 ">
       {data.map((ele, i) => {
        return (
            <div key={i + Date + Math.random()} className="space-y-5" >
              <div className="rounded-3xl overflow-hidden">
              <Image className="transition-transform duration-500 hover:scale-110" src={ele.img.src} alt={ele.img.alt} width={ele.img.width} height={ele.img.height} />
              </div>
              <div className="space-y-1 min-h-[160px] sm:min-h-min">
              <span className="inline-block w-full font-[600] uppercase">{ele.title}</span>
              <p>{ele.paragraph}</p>
              </div>
              <div className="divider"></div>
              <div className="flex items-center justify-center gap-3">
              <Link href={ele.href} className="link link-success">Details</Link>
              <FiExternalLink />
              </div>
            </div>
        )
       })}
       </div> 

        </div>
    </section>
  )
}




















//                 return <div className="rounded-3xl overflow-hidden" key={i + Date + Math.random()}>
//                     <div className={`relative flex items-center justify-center w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[#0a0a0a66] transition-transform duration-300 hover:scale-110 `} >
//                     <span className="absolute z-40 tracking-wider text-2xl text-white uppercase xs:text-xl">{ele.title}</span>
//                     <Image src={ele.img.src} width={ele.img.width} height={ele.img.height} className="w-full h-full object-cover" />
//                 </div>
//                 </div>
//             })
//         }
//        </div> 

//         </div>
//     </section>
//   )
// }
