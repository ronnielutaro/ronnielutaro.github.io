import Link from 'next/link'
import React from 'react'

export default function HeaderMenu() {
  return (
	<div>
		<ul className="nav navbar-nav">
			<li className="active"><Link href="/"><span className="ti-home"></span> </Link></li>
			
			<li><Link href="#">About </Link></li>
			
			<li><Link href="#">Work <i className="fa fa-chevron-down"></i></Link>
				<ul className="sub-menu left">
					<li><Link href="#" className="dez-page">Backend Engineering  </Link></li>
					<li><Link href="#" className="dez-page">Web Design</Link></li>
					<li><Link href="#" className="dez-page">Product Design </Link></li>
					<li><Link href="#" className="dez-page">Digital Design </Link></li>
					<li><Link href="#" className="dez-page">3D Modelling </Link></li>
					<li><Link href="#" className="dez-page">Virtual Reality </Link></li>
					<li><Link href="#" className="dez-page">Concept Art </Link></li>
				</ul>
			</li>
			
			<li><Link href="#">Blog <i className="fa fa-chevron-down"></i></Link>
				<ul className="sub-menu left">
					<li><Link href="#" className="dez-page">Engineering  </Link></li>
					<li><Link href="#" className="dez-page">Visual Arts</Link></li>
				</ul>
			</li>
		</ul>
	</div>
  )
}
