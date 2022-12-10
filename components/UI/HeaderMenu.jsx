import Link from 'next/link'
import React from 'react'

export default function HeaderMenu() {
  return (
	<div>
		<ul className="nav navbar-nav">
			<li className="active"><Link href="/"><span className="ti-home"></span> Home </Link></li>
			
			<li><Link href="/about">About </Link></li>
			
			<li><Link href="#">Work <i className="fa fa-chevron-down"></i></Link>
				<ul className="sub-menu left">
					<li><Link href="#" className="dez-page">Engineering  </Link></li>
					<li><Link href="#" className="dez-page">Design </Link></li>
				</ul>
			</li>
			
			<li><Link href="/blog">Blog </Link></li>

			<li><Link href="/contact">Contact </Link></li>
		</ul>
	</div>
  )
}
