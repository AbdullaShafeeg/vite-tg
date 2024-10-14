import { Section, Textarea, Cell,  Button, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';



export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        {/* Header Section */}
        <Section
        style={{
          background: '#13a412',
          height: '53px',
        }}>
        <Cell>
          <Button>A</Button>
        </Cell>
        </Section>

        {/* Content Section */}
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>

        {/* ChatInput Section */}
        <Section>
          <Cell>
            <Button>B</Button>
            <Textarea
            placeholder='Message'
            style={{
              background: '#323232',
            }}>
            </Textarea>
          </Cell>
        </Section>
      </List>
    </Page>
  );
};
