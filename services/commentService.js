var db = require('../database/database');

  async function findAllMessages(req, res, next) {
    try {
      const { Message } = await db();
      const Messages = await Message.findAll();
      res.render('list.twig', { title: 'Message List', Messages: Messages });
    } catch (e) {
      console.error(e);
      res.status(500).send('Internal Server Error');
    }
  }



  async function findCreate(req, res, next) {
    try {
      res.render('form.twig', { title: 'Message List'});
    } catch (e) {
      console.error(e);
      res.status(500).send('Internal Server Error');
    }
  }
 async function createMessage(req, res, next) {
      const { Message } = await db();
      const { pseudo,content} = req.body;
      const likes=0;
      await Message.create({ pseudo,content,likes });
      res.redirect('/forms/list');
  }
  



  async function displayUpdateForm(req, res, next) {
      try {
          const { Message } = await db();
          const { id } = req.params;
          const MessageToUpdate = await Message.findByPk(id);
          if (!MessageToUpdate) {
              return res.status(404).json({ error: 'Message not found' });
          }
          res.render('formupdate.twig', { title: 'Update Message', Message: MessageToUpdate });
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
  };
  
  async function updateMessage(req, res) {
      try {
          const { Message } = await db();
          const { pseudo,content} = req.body;
          const { id } = req.params;
          const MessageToUpdate = await Message.findByPk(id);
          if (!MessageToUpdate) {
              return res.status(404).json({ error: 'Message not found' });
          }
          MessageToUpdate.pseudo = pseudo;
          MessageToUpdate.content = content;
          await MessageToUpdate.save();
          res.redirect('/forms/list');
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
  }





  
  async function deleteMessage(req, res, next) {
      try {
          const { Message } = await db();
          const { id } = req.params;
          const MessageToDelete = await Message.findByPk(id);
          if (!MessageToDelete) {
              return res.status(404).json({ error: 'Message not found' });
          }
          await MessageToDelete.destroy();
          res.redirect('/forms/list');
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
  }









  
  async function likesMessage(req, res, next) {
    try {
        const { Message } = await db();
        const { messageId } = req.params;
        const messageToUpdate = await Message.findByPk(messageId);
        if (!messageToUpdate) {
            return res.status(404).json({ error: 'Message not found' });
        }
        messageToUpdate.likes += 1;
        await messageToUpdate.save();
        res.redirect('/forms/list');
    } catch (error) {
        console.error('Erreur lors de l\'incrémentation des likes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}




  
  
  module.exports = { findAllMessages, createMessage, displayUpdateForm, updateMessage, deleteMessage ,likesMessage,findCreate};
  