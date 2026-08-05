import test, { describe } from "node:test";
import { toggleBackground } from "../hamburgerMenu"
import { useState } from 'react'

describe('Testing buttons',() => {
    describe('Background Toggle buttons', () => {
        const [value, setValue]= useState(false)
        test('Testing if the value of background changes to the oposite', () => {
            setValue(toggleBackground(value,setValue))
            expect(typeof value).toBe("boolean")
         })
         test('Testing if the function returns the opositeValue', () => {
            const oppositeValue = !{value}
            setValue(toggleBackground(value,setValue))
            expect(oppositeValue).toBe(value)
         })
    })
   
})