"use client"

import Navbar from "@/components/Navbar"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
import React, { useState } from "react"

export default function Page() {
    const [gaya, setGaya] = useState(null)
    const [sudut, setSudut] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungVektor = () => {
        if (gaya !== null && sudut !== null) {
            const radian = (Math.PI / 180) * sudut
            const x = gaya * Math.cos(radian)
            const y = gaya * Math.sin(radian)
            setHasil({ x: x.toFixed(2), y: y.toFixed(2) })
        }
    }
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Simpel Vektor</div>
                    <div className="flex items-center justify-center w-56 px-5 italic bg-gray-200 rounded-xl">
                        <Link href="/kalkulator/newton-1">Hukum Newton 1 &gt;</Link>
                        {/* <p>Hukum Newton 1 &gt;</p> */}
                    </div>
                </div>
                <div className="flex w-full gap-x-5">
                    <div className="flex flex-col w-2/3 px-8 py-5 text-lg font-semibold bg-gray-200 gap-y-8 rounded-xl">
                        <p>Isi Sendiri Ya Ndes!!</p>
                        <div className="flex flex-col max-w-lg gap-y-5">
                            <Input
                                label="F (Gaya)"
                                type="number"
                                onChange={(e) => setGaya(parseFloat(e.target.value))}
                            />
                            <Input
                                label="&#952; (Sudut)"
                                type="number"
                                onChange={(e) => setSudut(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungVektor}>
                                <p className="font-bold">Wess</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 bg-gray-200 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-5xl font-bold">{hasil ? `x: ${hasil.x}` : ""}</p>
                                <p className="text-5xl font-bold">{hasil ? `y: ${hasil.y}` : ""}</p>
                            </>
                        ) : (
                            <p className="text-xl font-semibold">Hasil ntar disini</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
