import { cn } from '@/shared/lib/utils'
import './loading-steps.scss'

type TLoadingSteps = TClassProps

const LoadingSteps = ({ className }: TLoadingSteps) => {
  const STEPS = 16
  const ANGLE_STEP = 360 / STEPS
  return (
    <div className={cn(className, 'loading-steps')}>
      {Array.from({ length: STEPS }, (_, _index) => (
        <AppIconFootprints
          key={_index}
          className={cn('loading-steps__item text-md')}
          style={{
            transform: `rotate(${ANGLE_STEP * _index}deg) translate(65px)`,
          }}
        />
      ))}
    </div>
  )
}

export { LoadingSteps }
