<?php

namespace Inchoo\UiPool\Model;

use Inchoo\UiPool\Api\TestInterface;

class Test implements TestInterface
{
    public function test()
    {
        return "Perica Szlikovski";
    }
}