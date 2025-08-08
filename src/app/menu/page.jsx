import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import ProposalCreateContent from '@/components/proposalEditCreate/ProposalCreateContent'
import ProposalSent from '@/components/proposalEditCreate/ProposalSent'
import TrafficReports from '@/components/widgetsTables/TrafficReports'

const page = () => {
  return (
   <DuplicateLayout>
      <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <ProposalCreateContent />
                    <TrafficReports title={"Menu"} />
                </div>
            </div>
            {/* <ProposalSent  /> */}
   </DuplicateLayout>
  )
}

export default page