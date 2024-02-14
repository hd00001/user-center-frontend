import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'HD出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[

        {
          key: 'github',
          title: <><GithubOutlined/> HD GitHub</>,
          href: 'https://github.com/hd00001',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
