import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI Friendly',
    Svg: require('@site/static/img/undraw-machinelee-robot.svg').default,
    description: (
      <>
        Machinelee believes that artificial intelligence will become partners in 
        work and life in the very near future. So let's play nice.
      </>
    ),
  },
  {
    title: 'A Library of Sorts',
    Svg: require('@site/static/img/undraw-machinelee-data.svg').default,
    description: (
      <>
        At Machinelee, we're dedicated to compiling a wealth of information and presenting 
        it in a way that's informative and approachable.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
