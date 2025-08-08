'use client'
import React, { useState } from 'react'
import { FiFilter, FiPlus } from 'react-icons/fi'
import Checkbox from '@/components/shared/Checkbox';
import DateRange from '../DateRange';
import Link from 'next/link';

const filterItems = ["Role", "Team", "Email", "Member", "Recommendation"]


const PageHeaderDate = () => {
  const [toggleDateRange, setToggleDateRange] = useState(false)

  return (
    <>
      <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
       
        
      </div>
    </>
  )
}

export default PageHeaderDate