counter = 0

request = function()
    path = "/recent-entries/" .. counter
    counter = counter + 1
    if counter > 17 then
        counter = 0
    end
    return wrk.format(nil, path)
end
