import React,{Fragment,  useState} from 'react';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import Link from 'next/link';

function Para(){
	return(
		<>
			<div className="abuot-box p-lr30">
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>	
		</>
	)
}

const HomeTab = (props) => {
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	  
	return(
		<Fragment>			
			<div className="container-fluid">
				<div className="dlab-tabs choseus-tabs">
					<ul className="nav row justify-content-center"  id="myTab" role="tablist">
						{/* <li>
							<a className= {classnames({ active : activeTab === '1' }) + ' className if avialble'}  onClick={() => { toggle('1'); }}	
							><span className="title-head">Cost Effectiveness</span></a>
						</li> */}
						<li>
							<Link href="#" className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><span className="title-head">Cost Effectiveness</span></Link>
						</li>
						<li>
							<Link href="#"	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><span className="title-head">Flexible Engagement Models</span></Link>
						</li>
						<li>
							<Link href="#"	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}}><span className="title-head">Technology Expertization</span></Link>
						</li>
						<li>
							<Link href="#"	className={classnames({active:activeTab === '4'}) + ''} onClick={()=>{ toggle('4');}}><span className="title-head">Pre-Built Packages</span></Link>
						</li>
					</ul>
				</div>	
			</div>
			<div className="container">
				<div className="tab-content chosesus-content">
					<div id="cost" className="tab-pane active">
						<TabContent activeTab={activeTab}>
							<TabPane tabId="1">
								<div className="row p-tb50">
									<div className="col-lg-6 m-b10 col-md-4 about-img " >
										<picture>
											<img src="/images/about/pic5.jpg" alt="" />
										</picture>	
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30 " >
											<h4 className="font-weight-300">Project Cost Effectiveness</h4>
											<ul className="list-checked primary">
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="2">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<picture>
											<img src="/images/about/pic6.jpg" alt="" />
										</picture>
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Flexible Engagement Models</h4>
											<ul className="list-checked primary">
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="3">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<picture>
											<img src="/images/about/pic7.jpg" alt="" />
										</picture>
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Technology Expertization</h4>
											<ul className="list-checked primary">
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="4">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<picture>
											<img src="/images/about/pic8.jpg" alt="" />
										</picture>	
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Pre-Built Packages</h4>
											<ul className="list-checked primary">
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							
						</TabContent>
					</div>	
				</div>
			</div>	
		</Fragment>
	)
	
}	
export default HomeTab;