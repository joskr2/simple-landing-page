import { FC } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

interface DialogProps {
  rutas: Array<{ name: string, href: string }>
  open?: boolean
  setOpen?: (open: boolean) => void
}

const MyDialog: FC<DialogProps> = ({ rutas, open, setOpen }) => {

  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={() => setOpen && setOpen(!open)}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Mi portafolio</span>
            <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              width={32}
              height={32}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setOpen && setOpen(!open)}
          >
            <span className="sr-only">Cerrar</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {rutas.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default MyDialog