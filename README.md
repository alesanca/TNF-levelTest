# TNF-levelTest
Prueba de nivel para una oferta de empleo de una empresa de Tenerife, la prueba es en java, pero como no sé de ese lenguaje, voy a realizarla en JS.

---------------------------------------------

El enunciado es el siguiente.

This test aims to assess the resolution of a problem in JAVA. Addressing or solving the problem to
develop in the way it seems appropriate. (5 days) A customer requires to obtain information about the users of his business, who are
registered in an external DB.

We know that the information of the users in the DB consists of the following attributes:
  o Name
  o Surname
  o Active (Flag)
  o Email
  o City
  o Birthday
  o Creation Date

It is intended to elaborate from the previous information a Rest java API:
  1. Retrieve active user list
  2. Retrieve cities starting per ‘X’ (X is an input)
  3. (OPTIONAL) List users per creation date (Asc & Desc)
  4. (OPTIONAL) Add a new user
  
Choose one:
  • Our DB has a limit of 3 calls each 10 seconds, if we receive a request that we cannot manage
  it, service return us a notice message.
  • When you into in a HTML page for fill a new user, we need to accept a disclaimer (before
  accepting it register form will be hidden). After accept disclaimer, register form will show and
  next time we load our page, it remembers we already accept disclaimer.
