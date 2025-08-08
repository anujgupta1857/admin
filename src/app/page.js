"use client"
import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import PaymentRecordChart from '@/components/widgetsCharts/PaymentRecordChart'
import LeadsOverviewChart from '@/components/widgetsCharts/LeadsOverviewChart'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import Project from '@/components/widgetsList/Project'
import Schedule from '@/components/widgetsList/Schedule'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import LatestLeads from '@/components/widgetsTables/LatestLeads'
import TeamProgress from '@/components/widgetsList/Progress'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'
import DuplicateLayout from './duplicateLayout'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'

const Home = () => {
  const token = sessionStorage.getItem('token')
  const router = useRouter();

  // if (!token) {
  //   router.push('/login');
  // }
  return (
    <DuplicateLayout>
      <PageHeader >
        <PageHeaderDate />
      </PageHeader>
      <div className='main-content'>
        <div className='row'>
          <SiteOverviewStatistics />
          {/* <PaymentRecordChart /> */}
           <SalesMiscellaneous isFooterShow={true} dataList={projectsDataTwo} />
          {/* <TasksOverviewChart /> */}
          {/* <LeadsOverviewChart chartHeight={315} /> */}
          <LatestLeads title={"Latest Leads"} />
          {/* <Schedule title={"Upcoming Schedule"} /> */}
         {/* <Project cardYSpaceClass="hrozintioal-card" borderShow={true} title="Project Status" />
          <TeamProgress title={"Team Progress"} footerShow={true} /> */}
        </div>
      </div>
    </DuplicateLayout>
    
  )
}

export default Home