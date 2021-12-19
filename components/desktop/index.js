import React from 'react'
import { BsApple } from 'react-icons/bs'
import moment from 'moment'
import { IoIosBatteryFull, IoIosWifi, IoIosSearch, IoIosBluetooth, IoIosList, IoIosPower } from 'react-icons/io'

const Desktop = () => {
    const date = moment().add(3, 'days').calendar(); 
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className="grid min-h-screen place-items-center">
        <div className="mx-auto h-full w-full bg-black rounded-[40px] border-[18px] border-black relative overflow-hidden z-40 ring ring-purple-50 shadow-xl">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://bestmacwallpapers.com/wp-content/uploads/2021/09/Retrowave-Macbook-Wallpaper.jpeg"
          />
          <div className='absolute top-0 right-0 left-0 h-10'>
            <div className='flex justify-between items-center bg-[#dcdeea] px-4'>
                <div className='flex items-center space-x-2'>
                    <BsApple />
                    <ul className='flex items-center space-x-3'>
                        <li className='text-sm font-medium cursor-pointer'>Finder</li>
                        <li className='text-sm cursor-pointer'>File</li>
                        <li className='text-sm cursor-pointer'>Edit</li>
                        <li className='text-sm cursor-pointer'>View</li>
                        <li className='text-sm cursor-pointer'>Go</li>
                        <li className='text-sm cursor-pointer'>Window</li>
                        <li className='text-sm cursor-pointer'>Help</li>
                    </ul>
                </div>
                <div className='flex items-center text-lg space-x-2'>
                    <IoIosWifi className='cursor-pointer' />
                    <IoIosBatteryFull className='cursor-pointer' />
                    <p className='text-sm font-medium'>{date}</p>
                    <IoIosSearch className='cursor-pointer' />
                    <IoIosList className='cursor-pointer' />
                    <IoIosPower onClick={reloadPage} className='cursor-pointer' />
                </div>
            </div>
          </div>
          

          {/* mackbook bottom  */}
          <div className="tablet-bottom-apps absolute bottom-10 left-0 right-0 mx-56">
              <div className="backdrop-blur-sm bg-white/30 w-full h-16 rounded-lg">
                <div className='flex items-center justify-between mt-2 mx-16'>
                    <img onClick={() => router.push("/mobile/call")} className='w-10 filter hover:brightness-95 cursor-pointer hover:animate-bounce' src="/img/call-logo.png" alt="app" />
                    <img onClick={() => router.push('/mobile/chat')} className='w-10 filter hover:brightness-95 cursor-pointer' src="/img/sms.png" alt="app" />
                    <img onClick={() => router.push('/instagram')} className='w-10 filter hover:brightness-95 cursor-pointer' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" alt="app" />
                    <img onClick={() => router.push('/whatsapp')} className='w-10 filter hover:brightness-95 cursor-pointer' src="https://www.freepnglogos.com/uploads/whatsapp-icon-png-image-28.png" alt="app" />
                    <img className='w-10 filter hover:brightness-95 cursor-pointer' src="/img/pinterest.png" alt="app" />
                    <img className='w-11 filter hover:brightness-95 cursor-pointer' src="/img/vscode.png" alt="app" />
                    <img className='w-10 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                    <img className='w-10 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                    <img className='w-10 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                    <img className='w-10 filter hover:brightness-95 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/apple-photos-493155.png" alt="app" />
                </div>
              </div>
          </div>
      </div>
      </div>
    )
}

export default Desktop
