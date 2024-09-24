import React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "../../utils/utils.ts";


interface ButtonProps extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>{
}

type defaultVariants =  {
    variant: "primary"
}

export const buttonVariants = cva(
    "px-4 py-3 rounded-md cursor-pointer font-semibold",
    {
        variants: {
            variant:{
                primary: "bg-primary-blue text-white"
            }
        },
        defaultVariants: {
         variant: "primary"
        } as defaultVariants
    }
)


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, ...props}, ref) => {
    return(
        <button
            className={cn(className, buttonVariants({variant}))}
            {...props}
            ref={ref}
        />
    )
})


export default Button;