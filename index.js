function collectName()
{
    prompt ("Enter your name")
    return name
}

function receivesAFunction(collectName)
{
    collectName();
}

function returnsANamedFunction()
{
    return collectName
}

function returnsAnAnonymousFunction(y)
{
    return (function() {console.log ("hello")})
}