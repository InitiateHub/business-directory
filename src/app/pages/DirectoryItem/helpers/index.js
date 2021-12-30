// import { parseISO } from 'date-fns';

export const MAX_TITLE_CHARACTERS = 1000;

export const selectFields = ['Id'];

export const expandFields = [
  'AllgemeinAbgestimmtPicker',
  'EmailRecipientPicker',
  'EmailRecipientCopyPicker',
];

// export const getPlainUserFrom = (

// function extractTextContent(htmlMarkup) {
//   const span = document.createElement('span');
//   span.innerHTML = htmlMarkup;
//   return span.textContent || span.innerText;
// }
function extractTextContent(htmlMarkup) {
  const [, text] = htmlMarkup
    .replace('</div>', '')
    .replaceAll('&#123;', '{')
    .replaceAll('&quot;', '"')
    .replaceAll('&#58;', ':')
    .replaceAll('&#125;', '}')
    .split('">');
  return text;
}

export const createBriefing = item => {
  const extractedDetailsMessages = item.OpZusammenfassung
    ? JSON.parse(extractTextContent(item.OpZusammenfassung))
    : [];
  // console.log(extractedDetailsMessages);
  return {
    itemCommentId: item.ItemCommentId,
    original: { __metadata: { ...item.__metadata } },
  };
};

// Create Comment Message
export const mapCommentMessage = item => ({
  Title: item.Title,
  ItemId: item.ItemId,
  CommentId: item.CommentId,
  ParentId: item.ParentId,
  User: item.User,
  Comment: item.Comment,
  // Created: parseISO(item.Created),
  original: { __metadata: { ...item.__metadata } },
});
