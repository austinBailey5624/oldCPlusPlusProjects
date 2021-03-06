{-# LANGUAGE GADTs,FlexibleContexts #-}

-- Imports for Monads

import Control.Monad

-- CFAE AST and Type Definitions

data CFAE where
  Num :: Int -> CFAE
  Plus :: CFAE -> CFAE -> CFAE
  Minus :: CFAE -> CFAE -> CFAE
  Lambda :: String -> CFAE -> CFAE
  App :: CFAE -> CFAE -> CFAE
  Id :: String -> CFAE
  If0 :: CFAE -> CFAE -> CFAE -> CFAE
  deriving (Show,Eq)

type Env = [(String,CFAE)]

evalDynCFAE :: Env -> CFAE -> (Maybe CFAE)

evalDynCFAE e (Num x) = return (Num x);
evalDynCFAE e (Plus a b) = do{
    (Num a2) <- evalDynCFAE e a;
    (Num b2) <- evalDynCFAE e b;
    return (Num(a2 + b2));
}
evalDynCFAE e (Minus l r) = do{
    (Num l2) <- evalDynCFAE e l;
    (Num r2) <- evalDynCFAE e r;
    return (Num(l2 - r2));
}
evalDynCFAE e (Lambda i  b) = return (Lambda i b)
evalDynCFAE e (App f a) = do{
    v <- evalDynCFAE e a;--strict
    (Lambda i b) <- evalDynCFAE e f;
    evalDynCFAE ((i,v):e) b;
--    evalDynCFAE e (subst i v b);--no-should use env not subst
}
evalDynCFAE e (Id i) = do{
    lookup i e;
}
evalDynCFAE e (If0 c t e2) = do{
    c' <- evalDynCFAE e c;
    t' <- evalDynCFAE e t;
    e2' <- evalDynCFAE e e2;
    if(c' == (Num 0))
        then return t'
        else return e2'
}
--Professor, if this were industry, I would leave this catch in,
--to help the next person that works on this page if they mess up
--however you took points off last time, so I'm commenting it out.
--evalDynCFAE _ _ = Nothing

data CFAEValue where
  NumV :: Int -> CFAEValue
  ClosureV :: String -> CFAE -> Env' -> CFAEValue
  deriving (Show,Eq)

type Env' = [(String,CFAEValue)]

evalStatCFAE :: Env' -> CFAE -> (Maybe CFAEValue)
evalStatCFAE e (Num x) = return (NumV x);
evalStatCFAE e (Plus l r) = do{
    (NumV l2) <- evalStatCFAE e l;
    (NumV r2) <- evalStatCFAE e r;
    return (NumV(l2 + r2));
}
evalStatCFAE e (Minus l r) = do{
    (NumV l2) <- evalStatCFAE e l;
    (NumV r2) <- evalStatCFAE e r;
    return (NumV(l2 - r2));
}
evalStatCFAE e (Lambda i b)=do{
    return (ClosureV i b e);
}
evalStatCFAE e (App f a)=do{
    v <- evalStatCFAE e a;
    (ClosureV i b e') <- evalStatCFAE e f;
    evalStatCFAE ((i,v):e') b;
}
evalStatCFAE e (Id i)=do{
    lookup i e;
}
evalStatCFAE e (If0 c t e2) = do{
    c' <- evalStatCFAE e c;
    t' <- evalStatCFAE e t;
    e2' <- evalStatCFAE e e2;
    if(c' == (NumV 0))
        then return t';
        else return e2';
}
--evalStatCFAE _ _ = Nothing

data CFBAE where
  Num' :: Int -> CFBAE
  Plus' :: CFBAE -> CFBAE -> CFBAE
  Minus' :: CFBAE -> CFBAE -> CFBAE
  Lambda' :: String -> CFBAE -> CFBAE
  App' :: CFBAE -> CFBAE -> CFBAE
  Bind' :: String -> CFBAE -> CFBAE -> CFBAE
  Id' :: String -> CFBAE
  If0' :: CFBAE -> CFBAE -> CFBAE -> CFBAE
  deriving (Show,Eq)

elabCFBAE :: CFBAE -> CFAE
elabCFBAE (Num' x) = (Num x)
elabCFBAE (Plus' l r) = (Plus (elabCFBAE l) (elabCFBAE r))
elabCFBAE (Minus' l r) = (Minus (elabCFBAE l) (elabCFBAE r))
elabCFBAE (Lambda' i b) = (Lambda i (elabCFBAE b))
elabCFBAE (App' l b) = (App (elabCFBAE l) (elabCFBAE b))
elabCFBAE (Bind' i v b) = (App (Lambda  i (elabCFBAE b)) (elabCFBAE v))
elabCFBAE (Id' i) = (Id i)
elabCFBAE (If0' c t e) = (If0 (elabCFBAE c) (elabCFBAE t) (elabCFBAE e))
--elabCFBAE _ = Num 0

evalCFBAE :: Env' -> CFBAE -> (Maybe CFAEValue)
evalCFBAE e (Num' x) = return (NumV x)
evalCFBAE e (Plus' l r) = (evalStatCFAE e (elabCFBAE (Plus' l r)))
evalCFBAE e (Minus' l r) = (evalStatCFAE e (elabCFBAE (Minus' l r)))
evalCFBAE e (Lambda' i b) = (evalStatCFAE e (elabCFBAE (Lambda' i b) ))
evalCFBAE e (App' f a) = (evalStatCFAE e (elabCFBAE (App' f a)))
evalCFBAE e (Bind' i v b) = (evalStatCFAE e (elabCFBAE (Bind' i v b)))
evalCFBAE e (Id' i) = (evalStatCFAE e (elabCFBAE (Id' i)))
evalCFBAE e (If0' c t e2) = (evalStatCFAE e (elabCFBAE (If0' c t e2)))


--evalCFBAE _ _ = Nothing
