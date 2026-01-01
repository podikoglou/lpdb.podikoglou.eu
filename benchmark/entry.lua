counter = 0

request = function()
    path = "/entry/" .. counter
    counter = counter + 1
    if counter > 350 then
        counter = 0
    end
    return wrk.format(nil, path)
end
