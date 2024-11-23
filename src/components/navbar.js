import React from "react"
import MenuHeader from "./MenuHeader"

export default function navbar() {
    return (
        <header className="flex justify-between w-full px-3 bg-white shadow-md min-h-16">
            <div className="flex items-center min-h-full cursor-pointer">
                <p className="font-bold">KALSIKA</p>
            </div>
            <div className="flex items-center justify-around w-full max-w-xl font-semibold">
                <MenuHeader href="/home">Home</MenuHeader>
                <MenuHeader>Kalkulator</MenuHeader>
                <MenuHeader>Support</MenuHeader>
            </div>
            <div className="flex items-center min-h-full cursor-pointer">
                <p className="font-bold">Quizz</p>
            </div>
        </header>
    )
}
