import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from '~/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data)
  })

  return (
    <div className='bg-primary'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 py-10 lg:grid-cols-5 lg:py-30 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <a href='asdfasd'></a>
              <div className='mt-5'>
                <input
                  type='email'
                  className='p-3 w-full ouline-none border border-gray-300 focus:border-gray-400 rounded-sm focus:shadow-sm'
                  placeholder='Nhập địa chỉ email của bạn'
                  {...register('email', rules.email)}
                />
                <div className='m-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  className='p-3 w-full ouline-none border border-gray-300 focus:border-gray-400 rounded-sm focus:shadow-sm'
                  placeholder='Nhập mật khẩu'
                  {...register('password')}
                />
                <div className='m-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  className='p-3 w-full ouline-none border border-gray-300 focus:border-gray-400 rounded-sm focus:shadow-sm'
                  placeholder='Nhập lại mật khẩu'
                  {...register('confirm_password')}
                />
                <div className='m-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-2'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-500'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex item-center justify-center'>
                  <div className='text-gray-400'>Bạn đã có tài khoản?</div>
                  <Link to='/login' className='text-red-400 ml-1'>
                    Đăng nhập
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
