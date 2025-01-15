import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const { handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-primary'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 py-10 lg:grid-cols-5 lg:py-30 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-5'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full ouline-none border border-gray-300 focus:border-gray-400 rounded-sm focus:shadow-sm'
                  placeholder='Nhập địa chỉ email của bạn'
                />
                <div className='m-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='p-3 w-full ouline-none border border-gray-300 focus:border-gray-400 rounded-sm focus:shadow-sm'
                  placeholder='Nhập mật khẩu'
                />
                <div className='m-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-500'>
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex item-center justify-center'>
                  <div className='text-gray-400'>Bạn chưa có tài khoản?</div>
                  <Link to='/register' className='text-red-400 ml-1'>
                    Đăng ký
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
