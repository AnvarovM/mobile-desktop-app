import React from 'react'
import { useRouter } from 'next/router';

const TabletApps = () => {
    const router = useRouter()
    function refreshPage() {
        if (confirm("Are you sure, want to refresh?")) {
            location.reload();
        }
    }
    return (
        <div className=''>
            {/* app list------------ */}
              <div className='flex mx-auto flex-wrap small:gap-6 xs:gap-8 md:gap-10'>
               <div onClick={() => router.push('/instagram')} className='flex flex-col items-center'>
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" alt="app" />
                   <p className='font-medium pt-2 text-white'>Instagram</p>
               </div>
               <div className='flex flex-col items-center'>
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="https://www.freepnglogos.com/uploads/whatsapp-icon-png-image-28.png" alt="app" />
                   <p className='font-medium pt-2 text-white'>Whats App</p>
               </div>
               <div className='flex flex-col items-center'>
                   <img className='w-14 filter hover:brightness-95 cursor-pointer' src="/img/pinterest.png" alt="app" />
                   <p className='font-medium pt-4 text-white'>Pinterest</p>
               </div>
               <div className='flex flex-col items-center'>
                   <img className='w-16 filter hover:brightness-95 cursor-pointer' src="/img/vscode.png" alt="app" />
                   <p className='font-medium pt-2 text-white'>Vscode</p>
               </div>
              </div>
        </div>
    )
}

export default TabletApps
