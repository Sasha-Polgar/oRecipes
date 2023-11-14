import Page from '../../components/Page';
import AppHeader from '../../components/AppHeader';
import Content from '../../components/Content';

function Error() {
  return (
    <Page>
      <AppHeader />
      <Content
        title="Erreur"
        text="Nous sommes désolé, Une erreur s'est produite."
      />
    </Page>
  );
}

export default Error;
