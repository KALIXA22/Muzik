import { forwardRef } from 'react'
import {NavLink as RouterNavLink}from 'react-router-dom'
import {cn} from "@/lib/utils"



const NavLink=forwardRef(
    ({className,activeClassName,pendingClassName,toString,...props},ref)=>{
        return(
            <RouterNavLink
            ref={ref}
            to={to}
            className={({
                isActive,
                isPending
            })=>
                cn(
                    className,
                    isActive && activeClassName,
                    isPending && pendingClassName
                )
            }
            {...props}
            />
        );
    }
);

NavLink.displayName="NavLink";

export {NavLink};
