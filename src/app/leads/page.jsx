import React from 'react'
import dynamic from 'next/dynamic'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import ProposalEditHeader from '@/components/proposalEditCreate/ProposalEditHeader'
import ProposalCreateContent from '@/components/proposalEditCreate/ProposalCreateContent'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import DuplicateLayout from '../duplicateLayout'
import Footer from '@/components/shared/Footer'
import LeadssTable from '@/components/leads/LeadsTable'
import LeadsHeader from '@/components/leads/LeadsHeader'
const ProposalSent = dynamic(() => import('@/components/proposalEditCreate/ProposalSent'), { ssr: false })
const page = () => {
    return (
        <>
        <DuplicateLayout>
        <PageHeader>
                <LeadsHeader />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <LeadssTable />
                </div>
            </div>
            <Footer />
            </DuplicateLayout>
        </>
    )
}

export default page