
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
export interface Props {
	title: string;
	href: string;
    items: any;
}

const NavBar = ({ title, href, items } : Props) => {

return (
  <>
    <div class="navbar fixed z-10">
        <div class="flex-1">
          <a href={href} class="btn btn-ghost normal-case text-2xl">{title}</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            {items.map((item) => {
                return(
                <li tabindex="0">
                        <a href={item.href}>
                            {item.title}
                            {item.children && item.children.length && 
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            }
                        </a>
                        {item.children && 
                            <ul class="p-1 text-xs">
                                {item.children.map(child => {
                                    return (
                                    <li><a href={child.href}>{child.title}</a></li>
                                    )
                                })}
                            </ul>
                        }
                    </li>
                )
              })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar;