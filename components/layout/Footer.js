import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Link from 'components/common/Link';
import styles from './Footer.module.css';
import useVersion from 'hooks/useVersion';
import useLocale from 'hooks/useLocale';

export default function Footer() {
  const { current } = useVersion();
  const { dir } = useLocale();

  return (
    <footer className="container" dir={dir}>
      <div className={classNames(styles.footer)}>
        <div className={classNames(styles.text, '')}>
          <FormattedMessage
            id="message.powered-by"
            defaultMessage="Powered by {name}"
            values={{
              name: (
                <Link href="https://umami.is">
                  <b>umami</b>
                </Link>
              ),
            }}
          />{' '}
          ({' '}
          <Link href="https://tictapp.dev">
            <b>tictapp</b>
          </Link>
          /0.0.1 )
        </div>
        <div className={classNames(styles.version, '')}>
          <Link href={`https://github.com/mikecao/umami/releases`}>{`v${current}`}</Link>
        </div>
      </div>
    </footer>
  );
}
