import React from "react"
import Navbar from "@/components/navbar"
import { Button } from "@nextui-org/react"
import ModalSelectMenu from "@/components/ModalSelectMenu"
export default function Page() {
    return (
        <main className="flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col min-h-[91dvh] justify-between">
                <div className="flex flex-col items-center justify-center mt-48">
                    <p className="text-6xl font-bold">Welcome, Para Sepuh Fisika🥳</p>
                    <p className="mt-10 text-xl">Langsung ke kalkulator aja banh, disini ga ada apa" serius!!!</p>
                    <div className="flex mt-10 gap-x-8">
                        <ModalSelectMenu />
                        <Button
                            className="font-semibold bg-white border border-black hover:bg-gray-200"
                            color="success"
                            size="lg"
                        >
                            Support
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-4 border-t border-gray-200">
                    <p className="font-semibold uppercase">Kelompok Pertamax</p>
                    <div className="flex gap-3 text-sm italic text-gray-500">
                        <p>El Jomok - 15769</p>
                        <p>Husnul - 15776</p>
                        <p>Brillian - 15794</p>
                        <p>Ahmad - 15773</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
