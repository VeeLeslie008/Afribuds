import { processSteps } from '../Data/Data';

function HowWeWork() {
  return (
    <section className="process">
      <div className="process__container">
        <header className="process__header">
          <div className="process__eyebrow">
            <span className="process__eyebrow-num">004</span>
            <span className="process__eyebrow-sep" aria-hidden="true"></span>
            <span className="process__eyebrow-label">Process</span>
          </div>

          <h2 className="process__title">How We Work</h2>

          <p className="process__subtitle">
            A quiet, considered process — from first conversation to the last
            plate served.
          </p>
        </header>

        <div className="process__timeline">
          {processSteps.map(function (step) {
            const isIconLeft = step.side === 'left';

            return (
              <div
                key={step.id}
                className={
                  'process__row process__row--icon-' +
                  step.side +
                  (step.highlighted ? ' process__row--highlighted' : '')
                }
              >
                <div
                  className={
                    'process__half process__half--left' +
                    (isIconLeft ? ' process__half--has-icon' : '')
                  }
                >
                  {isIconLeft && (
                    <div className="process__icon-block">
                      <span className="process__icon-wrap">
                        <i className={step.icon} aria-hidden="true"></i>
                      </span>
                      <span className="process__num">{step.number}</span>
                    </div>
                  )}

                  {!isIconLeft && (
                    <div className="process__text-block">
                      <h3 className="process__step-title">{step.title}</h3>
                      <p className="process__step-text">{step.text}</p>
                    </div>
                  )}
                </div>

                <div
                  className={
                    'process__half process__half--right' +
                    (!isIconLeft ? ' process__half--has-icon' : '')
                  }
                >
                  {!isIconLeft && (
                    <div className="process__icon-block">
                      <span className="process__icon-wrap">
                        <i className={step.icon} aria-hidden="true"></i>
                      </span>
                      <span className="process__num">{step.number}</span>
                    </div>
                  )}

                  {isIconLeft && (
                    <div className="process__text-block">
                      <h3 className="process__step-title">{step.title}</h3>
                      <p className="process__step-text">{step.text}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;